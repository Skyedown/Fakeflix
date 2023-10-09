import React from 'react'

//styles
import './register.css'

function Register() {
  return (
    <div className="register">
         <div class="container">
	<div class="header">
		<h2>Zaregistruj sa</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="name">Meno</label>
			<input type="text" placeholder="Zadaj tvoje meno" id="name" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Email</label>
			<input type="email" placeholder="Zadaj email" id="email" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Password</label>
			<input type="password" placeholder="Password" id="password"/>
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Password check</label>
			<input type="password" placeholder="Password two" id="password2"/>
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>
		<button>Submit</button>
	</form>
</div>

    </div>
   
  )
}

export default Register