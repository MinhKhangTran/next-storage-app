import { connectDB } from "@/config/db";
import User from "@/models/User";
import axios from "axios";
import { getSession } from "next-auth/client";
import { useForm } from "react-hook-form";
import Layout from "@/components/ui/Layout";

const CreatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (daten: any) => {
    console.log(daten);
    try {
      axios.post("/api/items", { name: daten.name, menge: daten.menge });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Layout Heading="Hinzufügen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name")}></input>
        <label>Menge</label>
        <input type="number" {...register("menge")}></input>
        <button type="submit">Hinzufügen</button>
      </form>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  connectDB();
  const session = await getSession({ req: context.req });
  // const user = await User.findOne({ name: session?.user?.name });
  // console.log(user);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default CreatePage;
