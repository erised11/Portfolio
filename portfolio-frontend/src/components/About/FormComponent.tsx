import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const FormComponent = () => {
  const { handleSubmit, register, formState } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  const { errors } = formState;

  return (
    <div className="text=white flex md:flex-row flex-col">
      <div className="md:w-1/2 mb-8">
        <h2 className="text-xl">Reach out to me!</h2>
        <p className="text-sm text-gray-300">
          For business and all other inquiries.
        </p>
      </div>
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-sm font-medium leading-6">
            Name <sup>*</sup>
          </label>
          <div className="my-2">
            <input
              type="text"
              {...register("name", {
                required: "Please enter first name",
                validate: (value) => {
                  return !!value.trim() || "Please enter first name";
                },
              })}
              className="pl-3 block w-full rounded-lg border py-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="text-red-300 italic text-sm py-2">{message}</p>
              )}
            />
          </div>
          <label className="block text-sm font-medium leading-6">
            Email <sup>*</sup>
          </label>
          <div className="my-2">
            <input
              type="text"
              {...register("email", {
                required: "Please enter an email",
                validate: (value) => {
                  return !!value.trim() || "Please enter an email";
                },
              })}
              className="pl-3 block w-full rounded-lg border py-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-300 italic text-sm py-2">{message}</p>
              )}
            />
          </div>
          <label className="block text-sm font-medium leading-6">Message</label>
          <div className="my-2">
            <textarea
              rows={3}
              {...register("message")}
              className="pl-3 block w-full rounded-lg border py-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
          <button
            className="float-right py-2 px-5 bg-emerald-500 rounded-lg mt-4"
            type="submit"
          >
            Reach out!
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
