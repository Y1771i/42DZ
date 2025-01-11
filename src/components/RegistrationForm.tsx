import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../style/RegistrationForm.css"; // Подключение стилей/

type FormValues = {
  username: string;
  lastname: string;
  city: string;
  email: string;
  phone: string;
  password: string;
};

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Данные формы:", data);
    alert("Регистрация успешна!");
  };

  return (
    <div className="registration-form">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Имя пользователя */}
        <div>
          <label>Имя пользователя:</label>
          <input
            {...register("username", { required: "Имя обязательно" })}
            type="text"
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
        </div>

        {/* Остальные поля формы */}
        {/* ... */}

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
