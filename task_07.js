// Create a class Validator that will check the validity of strings.

// Create a function isEmail to check if a string is a valid email address. The function should use a regular expression to verify the correct email format.

// Create a function isNotEmpty to check if a string is not empty or consists only of spaces.

// Create a function isAlpha to check if a string contains only letters (Latin alphabet).

// Create a function isNumeric to check if a string contains only digits.

// Create a function isAlphanumeric to check if a string contains only letters and numbers without special characters.

// Create a function hasMinLength to check if a string meets the minimum length, which is passed as an argument.

// Create a function hasMaxLength to check if a string does not exceed the given maximum length.

// Create a function isUrl to check if a string is a valid URL.

// Create a function matchesPattern to check if a string matches a given regular expression.

class Validator {
    static isNotEmpty(str) {
      return typeof str === 'string' && str.trim().length > 0;
    }
  
    static isAlpha(str) {
      return /^[a-zA-Z]+$/.test(str);
    }
  
    static isNumeric(str) {
      return /^[0-9]+$/.test(str);
    }
  
    static isAlphanumeric(str) {
      return /^[a-zA-Z0-9]+$/.test(str);
    }
  
    static hasMinLength(str, minLength) {
      return typeof str === 'string' && str.length >= minLength;
    }
  
    static hasMaxLength(str, maxLength) {
      return typeof str === 'string' && str.length <= maxLength;
    }
  
    static isEmail(str) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
    }
  
    static isUrl(str) {
      try {
        new URL(str);
        return true;
      } catch {
        return false;
      }
    }
  
    static matchesPattern(str, pattern) {
      return pattern.test(str);
    }
  }
  
  
  console.log(Validator.isNotEmpty("Hello")); // true
  console.log(Validator.isAlpha("Hello123")); // false
  console.log(Validator.isEmail("test@example.com")); // true
  console.log(Validator.isUrl("https://example.com")); // true
  