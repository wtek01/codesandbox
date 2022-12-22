import "./styles.css";
import { useForm } from "react-hook-form";

export default function Form4() {
  const form = useForm({
    defaultValues: {
      hello: "world"
    },
    mode: "onChange"
  });
  const { register } = form;

  return (
    <form>
      <label>
        <div>
          <input type="radio" value="dor" {...register("hello")} />
          dor
        </div>
      </label>
      <label>
        <div>
          <input type="radio" value="world" {...register("hello")} />
          world
        </div>
      </label>
      <label>
        <div>
          <input type="radio" value="alon" {...register("hello")} />
          alon
        </div>
      </label>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
    </form>
  );
}
