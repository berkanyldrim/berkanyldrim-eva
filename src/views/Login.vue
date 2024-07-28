<script setup lang="ts">
// --- VeeValidate Imports ---
import { useForm } from "vee-validate";
// --- Import Form Schema ---
import { schema, defaultLoginValues } from "../form-schema/login";
// --- Import Services ---
import { login } from "../services/login";
// --- Router Import ---
import { useRouter } from "vue-router";
// --- Toast Import ---
import { useToast } from "primevue/usetoast";

//NOTE - Router
const router = useRouter();

//NOTE - Toast
const toast = useToast();

//NOTE - Create Form
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: defaultLoginValues,
});

//NOTE - Define Fields
const [email] = defineField("Email");
const [password] = defineField("Password");

//NOTE- On Submit
const submitHandler = handleSubmit((values) => {
  login(values)
    .then((response) => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Login Successful Redirecting to Home Page",
        life: 3000,
      });

      //NOTE - Redirect to Home Page 30ms after successful login
      setTimeout(() => {
        router.push("/");
      }, 1000);
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Login Failed",
        life: 3000,
      });
    });
});
</script>

<template>
  <form @submit="submitHandler">
    <div
      class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
    >
      <Toast />
      <div class="flex flex-column align-items-center justify-content-center">
        <div
          style="
            border-radius: 56px;
            padding: 0.3rem;
            background: linear-gradient(
              180deg,
              var(--primary-color) 10%,
              rgba(33, 150, 243, 0) 30%
            );
          "
        >
          <div
            class="w-full surface-card py-8 px-5 sm:px-8"
            style="border-radius: 53px"
          >
            <div class="formgrid grid flex-column gap-5">
              <div class="field col flex-column">
                <label
                  for="email"
                  class="block text-900 text-xl font-medium mb-2"
                  >Email</label
                >
                <InputText
                  id="email"
                  placeholder="Email"
                  class="w-full md:w-30rem"
                  v-model="email"
                  autocomplete="on"
                  aria-describedby="email-help"
                  :class="{ 'p-invalid': errors.Email }"
                />
                <small id="email-help" class="p-error">
                  {{ errors.Email }}
                </small>
              </div>

              <div class="field col flex-column">
                <label
                  for="password"
                  class="block text-900 font-medium text-xl mb-2"
                  >Password</label
                >
                <Password
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  :toggleMask="true"
                  class="w-full md:w-30rem"
                  inputClass="w-full"
                  :feedback="false"
                  autocomplete="current-password"
                />
              </div>

              <div class="field col">
                <Button
                  label="Sign In"
                  class="w-full p-3 text-xl"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
