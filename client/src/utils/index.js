export const truncateString = (text, num) => { 
    if (text?.length > num) {
        return text.slice(0, num)+'...'
    } else {
        return text
    }
  };

  export const validateEmail = (email) => {
    return email
     .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };