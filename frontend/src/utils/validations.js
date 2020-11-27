
export const FULL_NAME_REGEX = /^([\u00c0-\u01ffa-zA-Z'-]+[ ]?[*]?[\u00c0-\u01ffa-zA-Z'-])+$/;


export const OCUPATION_REGEX = FULL_NAME_REGEX;


export const CELPHONE_REGEX = /^(\+\d{1,2}\s)?(\(?\d{3}\)?[\s.-]?\d{3})([\s.-]?\d{4})$/;


export const USUARIO_REGEX = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,14}$/;
