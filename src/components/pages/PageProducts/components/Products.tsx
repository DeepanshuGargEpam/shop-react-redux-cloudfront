import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";
import { useCallback, useEffect, useState } from 'react';
import { product } from '../../../../models/products';
import { fetchCars } from '../../../../api/fetchCars';

// export default function Products() {
//   // const { data = [], isLoading } = useAvailableProducts();
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const [data, setData] = useState<product[]>([]);

//   const getCars = useCallback(async () => {
//     try {
//       const response = await fetchCars();
//       setIsLoading(false);
//       if (response.status === 200) {
//         setData(response.data.cars);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [setIsLoading]);

//   useEffect(() => {
//     getCars();
//   }, []);
//   if (isLoading) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Grid container spacing={4}>
//       {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
//       {data.map((car, index) => (
//         <Grid item key={car.id} xs={12} sm={6} md={4}>
//           <Card
//             sx={{ height: "100%", display: "flex", flexDirection: "column" }}
//           >
//             <CardMedia
//               sx={{ pt: "56.25%" }}
//               image={`${car.image}?sig=${index}`}
//               // title={`${car.title}`}
//             />
//              <span style={{ padding: '10px' }}>
//               {car.title} - Price: {car.price}
//             </span>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

export default function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [data, setData] = useState<product[]>([]);

  const getCars = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchCars();
      console.log(response)
      setIsLoading(false);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setData]);

  useEffect(() => {
    getCars();
  }, []);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map((car, index) => (
        <Grid item key={car.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              sx={{ pt: '56.25%' }}
              image={car.image}
            />

            <span style={{ padding: '10px' }}>
              {car.title} - Price: {car.price}
            </span>

            {/* <CardActions>
              <AddProductToCart product={product} />
            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

