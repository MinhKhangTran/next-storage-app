import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { IItem } from "@/interfaces/Item";
import { useEffect } from "react";

const CreateForm = ({ item }: { item?: IItem }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: item ? item.name : "",
      menge: item ? item.menge : 0,
      bild: "",
    },
  });
  const router = useRouter();
  // image
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [oldImage, setOldImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    if (item) {
      setOldImage(item.bild);
    }
  }, [item]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files);
    // @ts-expect-error
    const file = Array.from(e.target.files);
    // console.log(file);

    //reset ImagePreview
    setImagePreview(null);
    setOldImage(null);
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

  const createItem = async (daten: any) => {
    // console.log(daten);
    setLoading(true);
    try {
      const { data } = await axios.post("/api/items", {
        name: daten.name,
        menge: daten.menge,
        bild: imagePreview,
      });
      if (data) {
        setLoading(false);
        router.push("/inventar");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
    }
  };
  const updateItem = async (daten: any) => {
    // console.log(daten);
    setLoading(true);
    if (imagePreview) {
      try {
        const { data } = await axios.put(`/api/items/${item?._id}`, {
          name: daten.name,
          menge: daten.menge,
          bild: imagePreview,
        });
        if (data) {
          setLoading(false);
          router.push("/inventar");
        }
      } catch (error) {
        setLoading(false);
        console.log(error.response.data.message);
      }
    } else {
      try {
        const { data } = await axios.put(`/api/items/${item?._id}`, {
          name: daten.name,
          menge: daten.menge,
        });
        if (data) {
          setLoading(false);
          router.push("/inventar");
        }
      } catch (error) {
        setLoading(false);
        console.log(error.response.data.message);
      }
    }
  };
  const deleteItem = async (_id: string) => {
    try {
      const { data } = await axios.delete(`/api/items/${_id}`);
      if (data) {
        router.push("/inventar");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <Wrapper>
      {/* NAME UND MENGE */}
      <Button
        outline
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        Zurück
      </Button>

      <h4>Name und Menge eingeben</h4>
      <form onSubmit={handleSubmit(item ? updateItem : createItem)}>
        <div className="floatright">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register("name", { required: "Pflichtfeld!" })}
            ></input>
            {errors.name && <p className="hint">{errors.name.message}</p>}
          </div>
          <div className="form-control menge">
            <label htmlFor="menge">Menge</label>
            <input
              type="number"
              {...register("menge", { required: "Pflichtfeld!" })}
            ></input>
            {errors.menge && <p className="hint">{errors.menge.message}</p>}
          </div>
        </div>

        {/* BILD */}

        <div className="divider" />
        <h4>{item ? "Bild ändern?" : "Bild hinzufügen"}</h4>
        {item && (
          <ImageWrapper>
            {oldImage && (
              <Image src={oldImage.url} alt="img" width="150" height="150" />
            )}
            {item && (
              <Button
                type="button"
                outline
                onClick={() => {
                  setShowEdit(!showEdit);
                }}
              >
                Bild Ändern
              </Button>
            )}
          </ImageWrapper>
        )}
        {showEdit && (
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
        )}
        {!item && (
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
        )}

        <ButtonGroup>
          <Button disabled={loading} type="submit">
            {loading ? "Lädt..." : item ? "Ändern" : "Hinzufügen"}
          </Button>

          {item && (
            <Button
              className="delete"
              type="button"
              onClick={() => {
                deleteItem(item._id);
              }}
            >
              Löschen
            </Button>
          )}
        </ButtonGroup>
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
  button {
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 50%;
  .delete {
    background: var(--red-light);
    color: var(--red-dark);
    &:hover {
      background: var(--red-dark);
      color: var(--red-light);
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default CreateForm;
