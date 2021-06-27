import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  // image
  const [imagePreview, setImagePreview] = useState<any>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    // @ts-expect-error
    const file = Array.from(e.target.files);
    // console.log(file);

    //reset ImagePreview
    setImagePreview(null);
    //create reader from FileReader Class
    const reader = new FileReader();
    //put image in ImagePreview

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };

    reader.readAsDataURL(file[0]);
  };

  const onSubmit = async (daten: any) => {
    // console.log(daten);
    try {
      const { data } = await axios.post("/api/items", {
        name: daten.name,
        menge: daten.menge,
        bild: imagePreview,
      });
      if (data) {
        router.push("/inventar");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <Wrapper>
      {/* NAME UND MENGE */}

      <h4>Name und Menge eingeben</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="floatright">
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: "Pflichtfeld!" })}
            ></input>
            {errors.name && <p className="hint">{errors.name.message}</p>}
          </div>
          <div className="form-control menge">
            <label>Menge</label>
            <input
              type="number"
              {...register("menge", { required: "Pflichtfeld!" })}
            ></input>
            {errors.menge && <p className="hint">{errors.menge.message}</p>}
          </div>
        </div>

        {/* BILD */}

        <div className="divider" />
        <h4>Bild hinzufügen</h4>
        <div className="floatright">
          <div className="form-control">
            <label>Bild</label>
            <input
              type="file"
              {...register("bild", { required: "Pflichtfeld!" })}
              onChange={onChange}
              name="bild"
            ></input>
            {errors.bild && <p className="hint">{errors.bild.message}</p>}
            {imagePreview !== null && (
              <Image src={imagePreview} alt="img" width="150" height="150" />
            )}
          </div>
        </div>

        <Button type="submit">Hinzufügen</Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .floatright {
    margin-left: 40%;
  }
  .form-control {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 0.125rem;
  }
  .menge {
    margin-top: 2rem;
  }
  input {
    border-radius: 5px;
    border: none;
    font-size: 1.1rem;
    padding: 0.25rem;
    border: solid 1px var(--primary-500);
  }
  .divider {
    height: 1px;
    background: var(--grey-100);
    margin: 2rem 0;
  }
`;

export default CreateForm;
