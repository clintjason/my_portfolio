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
							<span v-if="errors.email" class="errorMessage">{{ errors.email }}</span>
						</div>
						<div class="form-group">
							<input type="text" class="form-control px-3 py-4" v-model="title" placeholder="Email Subject" @change="titleHandleChange">
							<span v-if="errors.title" class="errorMessage">{{ errors.title }}</span>
						</div>
						<div class="form-group mb-5">
							<textarea class="form-control px-3 py-4" cols="30" rows="10" placeholder="Write me a Message" v-model="message" @change="messageHandleChange"></textarea>
							<span v-if="errors.message" class="errorMessage">{{ errors.message }}</span>
						</div>
						<div class="form-group flex-box">
							<input v-if="isLoading" type="submit" class="btn btn-primary  px-4 py-3" value="Send Message">
							<svg v-else version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve" width="100px" height="100px">
								<path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
										<animateTransform 
											attributeName="transform" 
											attributeType="XML" 
											type="rotate"
											dur="1s" 
											from="0 50 50"
											to="360 50 50" 
											repeatCount="indefinite" />
								</path>
							</svg>
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
								<a href="https://wa.me/677096749/" target="_blank" class="social-item"><span class="icon-whatsapp"></span> (+237) 677 09 67 49</a>
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
import { useToast } from "vue-toastification";
import { ref, computed, watch } from 'vue';

export default {
	setup() {
		///const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const toast = useToast();
		let loader = ref(false);
		console.log(loader.value)

		const isLoading = () => computed({
			get() {
				return loader.value
			},
			set(val) {
				loader.value = val
			}
		})

		watch(isLoading, (newV,oldV) => {
			console.log(`just changed from ${oldV} to ${newV}`)
			loader = newV;
		})


    const validationSchema = object ({
      username: string().required().min(3).max(30)
      .matches(/^[a-zA-Z]{1,}([a-zA-Z]*[-\ ]){0,}([a-zA-Z]){1,}$/,"Must contain Letters, Minus or Space characters"),
      title: string().required().min(3).max(100)
      .matches(/^[a-zA-Z]{1,}([a-zA-Z]*[\w\s.,;:!?_()-/\])+([a-zA-Z]){1,}$/,"Must contain Letters, Minus or Space characters"),
      message: string().required().min(3).max(500)
      .matches(/^[a-zA-Z]{1,}([a-zA-Z]*[\w\s.,;:!?_()-/\])+([a-zA-Z]){1,}$/,"Must contain Letters, Minus or Space characters"),
      email: string().email().required(),
			//tel: string().required().matches(phoneRegExp, 'Phone number is not valid'),
    });

    const {handleSubmit, errors, setFieldValue } = useForm({validationSchema})

    const {value: username} = useField("username")
    const {value: email} = useField("email")
    const {value: message} = useField("message")
    const {value: title} = useField("title")

    const usernameHandleChange = (event) => {
      setFieldValue('username', event.target.value)
    }
    const emailHandleChange = (event) => {
      setFieldValue('email', event.target.value)
    }
    const messageHandleChange = (event) => {
      setFieldValue('message', event.target.value)
    }
    const titleHandleChange = (event) => {
      setFieldValue('title', event.target.value)
    }

    const contact = handleSubmit((values) => {
			isLoading(true);
			console.log(loader.value)
			const templateParams = {
				from_name: values.username,
				from_email: values.email,
				subject: values.title,
				message: values.message
			}
			console.log(templateParams);
			emailjs.send('service_bhg8wi7', 'template_zr4uxip', templateParams)
			.then(res => {
				console.log(res);
				toast.success("Mail Sent Successfully", {
          timeout: 4000
        });
				isLoading(false);
				console.log(loader.value)

			})
			.catch(error => {
				console.error(error);
				toast.error("Failed To Send Mail. Please Try again", {
          timeout: 4000
        });
				isLoading(false);
		console.log(loader.value)

			})
    })

    return {
      contact,
      username,
      email,
			message,
			title,
      errors,
			isLoading,
			loader: loader.value,
      usernameHandleChange,
      emailHandleChange,
      messageHandleChange,
      titleHandleChange,
    }
  },
}
</script>