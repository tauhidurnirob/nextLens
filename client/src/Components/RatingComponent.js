import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import colors from "../../config/colors";
import { authSelector } from "../redux/slices/authSlice";
import { productSelector } from "../redux/slices/productSlice";
import productApi from "../../pages/api/products";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  form: {
    margin: "10px 0",
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.black,
    color: colors.white,
    maxWidth: "150px",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
});

const RatingComponent = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const { userInfo } = useSelector(authSelector);
  const { productById } = useSelector(productSelector);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const values = {
      rating: value,
      comment: data.comment,
    };
    const { ok } = await productApi.createProductReview(
      productById?._id,
      values,
      userInfo?.token
    );
    if (ok) {
      toast.success("Review added");
    } else {
      toast.error("Product already reviewed");
    }
  };

  const classes = useStyles();

  return (
    <Grid item container md={7}>
      <ToastContainer />
      {productById?.reviews?.length === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Box mb={2} component="div" className={clsx(classes.root)}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>

          <Grid container direction="column">
            <FormControl>
              <TextField
                id="outlined-Comment"
                label="Comment"
                variant="outlined"
                multiline
                minRows={4}
                maxRows={8}
                inputProps={{ ...register("comment") }}
              />
            </FormControl>
            {userInfo ? (
              <Button type="submit" className={clsx(classes.btn)}>
                Submit
              </Button>
            ) : (
              <Link href="/login">
                <Button className={clsx(classes.btn)}>Login</Button>
              </Link>
            )}
          </Grid>
        </form>
      ) : (
        <Grid container alignItems="center" justifyContent="space-between">
          {productById?.reviews?.map((review) => (
            <>
              <Typography variant="h6" gutterBottom>
                <Box fontWeight="fontWeightBold">{review?.name}</Box>
              </Typography>
              <Rating value={review?.rating} />
              <Typography variant="h6" gutterBottom>
                <Box fontWeight="fontWeightBold">
                  {review?.createdAt?.substring(0, 10)}
                </Box>
              </Typography>
            </>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default RatingComponent;
