import { useFormik } from "formik";
import * as Yup from "yup";
import type { SortResult } from "../types";
import { sort, VOLUME_THRESHOLD, DIMENSION_THRESHOLD, MASS_THRESHOLD } from "../utils/sort";
import InputField from "./InputField";

interface SortFormValues {
  width: string;
  height: string;
  length: string;
  mass: string;
}

interface SortFormProps {
  onSubmit: (result: SortResult) => void;
}

const positiveNumber = Yup.string()
  .required("Required")
  .test("positive", "Must be a non-negative number", (value) => {
    if (value === undefined || value === "") return false;
    const num = Number(value);
    return !isNaN(num) && num >= 0;
  });

const validationSchema = Yup.object({
  width: positiveNumber,
  height: positiveNumber,
  length: positiveNumber,
  mass: positiveNumber,
});

export default function SortForm({ onSubmit }: SortFormProps) {
  const formik = useFormik<SortFormValues>({
    initialValues: { width: "", height: "", length: "", mass: "" },
    validationSchema,
    onSubmit: (values) => {
      const w = Number(values.width);
      const h = Number(values.height);
      const l = Number(values.length);
      const m = Number(values.mass);

      const volume = w * h * l;
      const bulky =
        volume >= VOLUME_THRESHOLD ||
        w >= DIMENSION_THRESHOLD ||
        h >= DIMENSION_THRESHOLD ||
        l >= DIMENSION_THRESHOLD;
      const heavy = m >= MASS_THRESHOLD;
      const stack = sort(w, h, l, m);

      onSubmit({ stack, volume, bulky, heavy });
    },
  });

  function fieldError(name: keyof SortFormValues): string | undefined {
    return formik.touched[name] && formik.errors[name] ? formik.errors[name] : undefined;
  }

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <InputField
          label="Width (cm)"
          name="width"
          value={formik.values.width}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={fieldError("width")}
        />
        <InputField
          label="Height (cm)"
          name="height"
          value={formik.values.height}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={fieldError("height")}
        />
        <InputField
          label="Length (cm)"
          name="length"
          value={formik.values.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={fieldError("length")}
        />
        <InputField
          label="Mass (kg)"
          name="mass"
          value={formik.values.mass}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={fieldError("mass")}
        />
      </div>
      <button
        type="submit"
        className="py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer"
      >
        Sort Package
      </button>
    </form>
  );
}
