document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  const btnLimpar = document.getElementById('btn-limpar');
  const statusEnvio = document.getElementById('status-envio');

  const emailValidate = (valor) => {
    if (!valor.trim()) {
      return 'O campo Email de contato é obrigatório.';
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(valor.trim())) {
      return 'Por favor, insira um e-mail válido.';
    }
    return '';
  }

  const nomeValidate = (valor) => {
    if (!valor.trim()) {
      return 'O campo Nome é obrigatório.';
    }
    return '';
  }

  const assuntoValidate = (valor) => {
    if (!valor.trim()) {
      return 'O campo Assunto é obrigatório.';
    }
    return '';
  }

  const mensagemValidate = (valor) => {
    if (!valor.trim()) {
      return 'O campo Mensagem é obrigatório.';
    }
    return '';
  }

  const campos = {
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: emailValidate
    },
    nome: {
      input: document.getElementById('nome'),
      error: document.getElementById('nome-error'),
      validate: nomeValidate
    },
    assunto: {
      input: document.getElementById('assunto'),
      error: document.getElementById('assunto-error'),
      validate: assuntoValidate
    },
    mensagem: {
      input: document.getElementById('mensagem'),
      error: document.getElementById('mensagem-error'),
      validate: mensagemValidate
    }
  };

  function limparErroCampo(campo) {
    campo.input.classList.remove('input-error');
    campo.error.textContent = '';
    campo.error.classList.remove('visible');
  }

  function definirErroCampo(campo, mensagem) {
    campo.input.classList.add('input-error');
    campo.error.textContent = mensagem;
    campo.error.classList.add('visible');
  }

  Object.values(campos).forEach((campo) => {
    campo.input.addEventListener('input', () => {
      limparErroCampo(campo);
    });
  });

  function validarFormulario() {
    let formularioValido = true;
    let primeiroCampoInvalido = null;

    Object.values(campos).forEach((campo) => {
      const mensagemErro = campo.validate(campo.input.value);
      if (mensagemErro) {
        definirErroCampo(campo, mensagemErro);
        formularioValido = false;
        if (!primeiroCampoInvalido) {
          primeiroCampoInvalido = campo.input;
        }
      } else {
        limparErroCampo(campo);
      }
    });

    if (primeiroCampoInvalido) {
      primeiroCampoInvalido.focus();
    }

    return formularioValido;
  }

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    statusEnvio.style.display = 'none';

    if (validarFormulario()) {
      statusEnvio.style.display = 'flex';
      form.reset();
      statusEnvio.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  btnLimpar.addEventListener('click', () => {
    Object.values(campos).forEach((campo) => {
      limparErroCampo(campo);
    });

    statusEnvio.style.display = 'none';
  });
});
