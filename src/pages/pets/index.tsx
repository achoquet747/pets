import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPets } from "../../store/pets";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PetCard from "./components/pet-card";
import { Sex } from "../../enums/sex";
import { TypeAnimal } from "../../enums/animals";
import { Grid } from "@mui/material";

// move this to interfaces

interface IPet {
  id: string;
  name: string;
  imageUrl: string;
  sex: Sex;
  type: TypeAnimal;
}

const PetsPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    dispatch(getPets({ q: "" }));
  }, []);

  return (
    <>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        style={{ justifyContent: "center" }}
      >
        {store.data.map((item: IPet) => (
          <Grid item key={item.id}>
            <PetCard
              key={item.id}
              name={item.name}
              sex={item.sex}
              type={item.type}
              id={item.id}
              imageUrl={item.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PetsPage;
