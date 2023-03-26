<template>
  <section class="site-section" id="section-contact">
		<div class="container">
			<div class="row">
				<div class="col-md-12 mb-5">
					<div class="section-heading text-center">
						<h2>Get <strong>In Touch</strong></h2>
					</div>
				</div>

				<div class="col-md-7 mb-5 mb-md-0">
					<form @submit="contact" class="site-form">
						<h3 class="mb-5">Get In Touch</h3>
						<div class="form-group">
							<input type="text" class="form-control px-3 py-4" v-model="username" placeholder="Your Name"  @change="usernameHandleChange">
							<span v-if="errors.username" class="errorMessage">{{ errors.username }}</span>
						</div>
						<div class="form-group">
							<input type="email" class="form-control px-3 py-4" v-model="email" placeholder="Your Email" @change="emailHandleChange">
							<span v-if="errors.username" class="errorMessage">{{ errors.email }}</span>
						</div>
						<div class="form-group">
							<input type="tel" class="form-control px-3 py-4" placeholder="Your Phone" v-model="tel" @change="telHandleChange">
							<span v-if="errors.tel" class="errorMessage">{{ errors.tel }}</span>
						</div>
						<div class="form-group mb-5">
							<textarea class="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message" v-model="message" @change="messageHandleChange"></textarea>
							<span v-if="errors.username" class="errorMessage">{{ errors.message }}</span>
						</div>
						<div class="form-group">
							<input type="submit" class="btn btn-primary  px-4 py-3" value="Send Message">
						</div>
					</form>
				</div>
				<div class="col-md-5 pl-md-5">
					<h3 class="mb-5">My Contact Details</h3>
					<ul class="site-contact-details">
						<li>
							<span class="text-uppercase">Email</span>
							ngassajason@gmail.com
						</li>
						<li>
							<span class="text-uppercase">Phone</span>
							+237 677 09 67 49
						</li>
						<li>
							<span class="text-uppercase">Address</span>
							Mile 17, Buea  <br>
							- Cameroon
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";

export default {
	setup() {
		const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = object ({
      username: string().required().min(3).max(30)
      .matches(/^[a-zA-Z]{1,}([a-zA-Z]*[-\ ]){0,}([a-zA-Z]){1,}$/,"Must contain Letters, Minus or Space characters"),
      message: string().required().min(3).max(500)
      .matches(/^[a-zA-Z]{1,}([a-zA-Z]*[-\ ]){0,}([a-zA-Z]){1,}$/,"Must contain Letters, Minus or Space characters"),
      email: string().email().required(),
			tel: string().required().matches(phoneRegExp, 'Phone number is not valid'),
    });

    const {handleSubmit, errors, setFieldValue } = useForm({validationSchema})

    const {value: username} = useField("username")
    const {value: email} = useField("email")
    const {value: message} = useField("message")
    const {value: tel} = useField("tel")

    const usernameHandleChange = (event) => {
      setFieldValue('username', event.target.value)
    }
    const emailHandleChange = (event) => {
      setFieldValue('email', event.target.value)
    }
    const messageHandleChange = (event) => {
      setFieldValue('message', event.target.value)
    }

    const telHandleChange = (event) => {
      setFieldValue('tel', event.target.value)
    }

    //let error = ref(0);
    //const signUpError = computed(() => error)

    const contact = handleSubmit((values) => {
      console.log("submit", values)
      /* store.dispatch('auth/signup',values)
        .then((data)=>{
          console.log("PASSED", data)
          store.dispatch("errorHandler/clear_error", {title: "SIGNUP"})
          router.push({name:'login'})
        })
        .catch((response)=>{
          console.log("FAILED",response)
          store.dispatch('errorHandler/set_error', {title: "SIGNUP",message: "Failed to Signup, Please try again"})
        }) */
    })


    //let isLoading = store.getters["auth/isLoading"]

    return {
      contact,
      username,
      email,
			message,
			tel,
      errors,
      usernameHandleChange,
      emailHandleChange,
      messageHandleChange,
      telHandleChange,
    }
  },
}
</script>