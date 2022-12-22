import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useForm, Controller } from "react-hook-form";

export default function Form2() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    defaultValues: {
      promoting2: ""
    }
  });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <div style={{ padding: 16, maxWidth: 600 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Promoting</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="promoting2"
            render={({ field }) => {
              console.log(field);
              return (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="business"
                    control={<Radio />}
                    label="Business"
                  />
                  hksjhshjshjsqjhsqjhsq qsjdsqdkjsqdsj
                  <FormControlLabel
                    value="nonprofit"
                    control={<Radio />}
                    label="Non-Profit"
                  />
                  <FormControlLabel
                    value="event"
                    control={<Radio />}
                    label="Event"
                  />
                </RadioGroup>
              );
            }}
          />
        </FormControl>

        <button onClick={() => reset()}>reset</button>
        <input type="submit" />
      </form>
    </div>
  );
}
