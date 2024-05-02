import { FC, useState } from "react";
import { TypeAnimal } from "../../../../enums/animals";
import { Sex } from "../../../../enums/sex";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

interface PetCardProps {
  id: string;
  name: string;
  type: TypeAnimal;
  imageUrl: string;
  sex: Sex;
}
const PetCard: FC<PetCardProps> = ({ id, name, type, imageUrl, sex }) => {

  const [open, setOpen] = useState(false);


  return (
    <>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        Additional Info Animal
      </DialogTitle>
      <DialogContent>
        <Typography>
         { `Sex: ${sex}`}
        </Typography>
        <Typography>
         { `Type: ${type}`}
        </Typography>
      </DialogContent>

    </Dialog>
      <Card sx={{ maxWidth: 500 }} key={id} onClick={() => setOpen(true)}>
        <CardMedia
          sx={{ height: 300, width: 300 }}
          image={imageUrl}
          title={"Image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PetCard;
