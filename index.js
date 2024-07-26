function introduction(Name) {
    return (`Hi, my name is ${Name}.`);
  }
  function introductionWithLanguage(Name, lanquage) {
    return (`Hi, my name is ${Name} and I am learning to program in ${lanquage}.`)
  }
  function introductionWithLanguageOptional(Name, lanquage = "JavaScript") {
    return (`Hi, my name is ${Name} and I am learning to program in ${lanquage}.`)
  }