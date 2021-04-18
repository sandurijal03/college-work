import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

:root {
  --primary: #fff;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family:'PT Sans',sans-serif;
  }
  
.App {
  text-align: center;
}

.home,
.services,
.products,
.sign-up {
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

/* .services {
  background-image: url('/images/img-2.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
}

.products {
  background-image: url('/images/img-1.jpg');
  background-position: center;
  background-size: fill;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
}

.sign-up {
  background-image: url('/images/img-8.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
} */

input,
select,
textarea {
  padding: 0.4em 0.2em;
  font-size: 1.2rem;
}

.active {
  font-weight: bold;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.delete-button {
  color: red;
  cursor: pointer;
}

.btn {
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background-color: var(--primary);
  color: #242424 !important;
  border: 1px solid var(--primary);
}

.btn--outline {
  background-color: transparent;
  color: #fff !important;
  padding: 8px 20px;
  border: 1px solid var(--primary);
  transition: all 0.3s ease-out;
}

.btn--outline:hover {
  color: #242424 !important ;
}

.btn--medium {
  padding: 8px 20px;
  font-size: 18px;
}

.btn--large {
  padding: 12px 26px;
  font-size: 20px;
}

.btn--large:hover,
.btn--medium:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  color: #242424;
  transition: 250ms;
}





`;

export default GlobalStyled;
