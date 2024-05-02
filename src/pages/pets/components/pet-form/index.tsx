import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectType from "../select-type";
import { useNavigate } from "react-router-dom";
import { Sex } from "../../../../enums/sex";
import { useDispatch } from "react-redux";
import { addPet } from "../../../../store/pets";

const schema = yup.object().shape({
  name: yup.string().required(),
  sex: yup.string().required(),
  type: yup.string().required(),
  imageUrl: yup.string().required(),
});

interface IData {
    name: string;
    type: string;
    sex: string;
    imageUrl: string
}

const PetForm = () => {
    //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      sex: "",
      type: "",
      imageUrl: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    reset();
    navigate("/pets/list");
  };

  const onSubmit = (data: IData) => {
    dispatch(addPet(data));
    navigate("/pets/list");
  };

  return (
    <>
      <Box>
        <Typography variant="h5">Add Pet</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label={"Name"}
                  onChange={onChange}
                  placeholder="Kitty"
                  error={Boolean(errors.name)}
                />
              )}
            />
            {errors.name && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <SelectType value={value} onChange={onChange} error={Boolean(errors.type)} />
                </>
              )}
            />
            {errors.type && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.type.message}
              </FormHelperText>
            )}
          </FormControl>
     

          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="sex"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  value={value}
                  name="sex"
                  label="Sex"
                  onChange={onChange}
                  error={Boolean(errors.sex)}
                >
                  <MenuItem value={Sex.F}>Female</MenuItem>
                  <MenuItem value={Sex.M}>Male</MenuItem>
                </Select>
                </>
              )}
            />
            {errors.sex && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.sex.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="imageUrl"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label={"Image Url"}
                  onChange={onChange}
                  placeholder="url"
                  error={Boolean(errors.imageUrl)}
                />
              )}
            />
            {errors.imageUrl && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.imageUrl.message}
              </FormHelperText>
            )}
          </FormControl>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button type="submit" variant="contained" sx={{ mr: 3 }} >
              Submit
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default PetForm;
