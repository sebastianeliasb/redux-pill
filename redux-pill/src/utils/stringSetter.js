function homeTypeParamsURL(flatApartment, house, duplex, penthouse) {
  let typeURLString = "";
  let counterArray = [flatApartment, house, duplex, penthouse];
  let typeURLArray = [];

  for (let i = 0; i < 4; i++) {
    if (counterArray[i] !== undefined) {
      typeURLArray.push(counterArray[i]);
    }
  }

  if (typeURLArray.length === 0) {
    // console.log("typeURLString", typeURLString);
    return typeURLString;
  } else {
    for (let j = 0; j < typeURLArray.length; j++) {
      if (j === 0) {
        typeURLString += "?type=" + typeURLArray[j];
      } else {
        typeURLString += "&type=" + typeURLArray[j];
      }
    }
    // console.log("typeURLString", typeURLString);
    return typeURLString;
  }
}

function conditionParamsURL(currentParamsString, newHouse, good, renovation) {
  let conditionURLString = "";
  let counterArray = [newHouse, good, renovation];
  let conditionURLArray = [];

  for (let i = 0; i < 3; i++) {
    if (counterArray[i] !== undefined) {
      conditionURLArray.push(counterArray[i]);
    }
  }

  if (currentParamsString === "" || currentParamsString === undefined) {
    conditionURLString = "";
    for (let j = 0; j < conditionURLArray.length; j++) {
      if (j === 0) {
        conditionURLString += "?condition=" + conditionURLArray[j];
      } else {
        conditionURLString += "&condition=" + conditionURLArray[j];
      }
    }
    // console.log("conditionURLString", conditionURLString);
    return conditionURLString;
  } else {
    conditionURLString = currentParamsString;
    for (let j = 0; j < conditionURLArray.length; j++) {
      conditionURLString += "&condition=" + conditionURLArray[j];
    }
    // console.log("conditionURLString", conditionURLString);
    return conditionURLString;
  }
}

function roomParamsURL(currentParamsString, rooms) {
  let roomParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    if (rooms === undefined) {
      return roomParamsURLString;
    } else {
      roomParamsURLString = "?room=" + rooms;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return roomParamsURLString;
    }
  } else {
    roomParamsURLString = currentParamsString;

    if (rooms === undefined) {
      return roomParamsURLString;
    } else {
      roomParamsURLString += "&room=" + rooms;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return roomParamsURLString;
    }
  }
}

function bathParamsURL(currentParamsString, baths) {
  let bathParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    if (baths === undefined) {
      return bathParamsURLString;
    } else {
      bathParamsURLString = "?bath=" + baths;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return bathParamsURLString;
    }
  } else {
    bathParamsURLString = currentParamsString;

    if (baths === undefined) {
      return bathParamsURLString;
    } else {
      bathParamsURLString += "&bath=" + baths;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return bathParamsURLString;
    }
  }
}

function priceRangeParamsURL(currentParamsString, price) {
  let priceRangeParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    priceRangeParamsURLString = "?price=" + price;
    return priceRangeParamsURLString;
  } else {
    priceRangeParamsURLString = currentParamsString + "&price=" + price;
    return priceRangeParamsURLString;
  }
}

function publicationDateParamsURL(currentParamsString, publicationDate) {
  let publicationDateParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    if (publicationDate === undefined) {
      return publicationDateParamsURLString;
    } else {
      publicationDateParamsURLString = "?publication_date=" + publicationDate;
      return publicationDateParamsURLString;
    }
  } else {
    publicationDateParamsURLString = currentParamsString;
    if (publicationDate === undefined) {
      return publicationDateParamsURLString;
    } else {
      publicationDateParamsURLString += "&publication_date=" + publicationDate;
      return publicationDateParamsURLString;
    }
  }
}

function specialFeaturesParamsURL(
  currentParamsString,
  petsAllowed,
  airContioning,
  lift,
  garden,
  swimmingPool,
  terrace
) {
  let specialFeaturesParamsURLString = "";
  let counterArray = [
    petsAllowed,
    airContioning,
    lift,
    garden,
    swimmingPool,
    terrace,
  ];
  let specialFeaturesURLArray = [];

  for (let i = 0; i < 6; i++) {
    if (counterArray[i] !== undefined) {
      specialFeaturesURLArray.push(counterArray[i]);
    }
  }

  if (specialFeaturesURLArray.length > 0) {
    if (currentParamsString === "" || currentParamsString === undefined) {
      specialFeaturesParamsURLString = "?";
      if (petsAllowed !== undefined) {
        specialFeaturesParamsURLString += "pet=" + petsAllowed + "&";
      }
      if (airContioning !== undefined) {
        specialFeaturesParamsURLString +=
          "air_conditioning=" + airContioning + "&";
      }
      if (lift !== undefined) {
        specialFeaturesParamsURLString += "lift=" + lift + "&";
      }
      if (garden !== undefined) {
        specialFeaturesParamsURLString += "garden=" + garden + "&";
      }
      if (swimmingPool !== undefined) {
        specialFeaturesParamsURLString += "swimming_pool=" + swimmingPool + "&";
      }
      if (terrace !== undefined) {
        specialFeaturesParamsURLString += "terrace=" + terrace;
      }
      return specialFeaturesParamsURLString;
    } else {
      specialFeaturesParamsURLString = currentParamsString + "&";
      if (petsAllowed !== undefined) {
        specialFeaturesParamsURLString += "pet=" + petsAllowed + "&";
      }
      if (airContioning !== undefined) {
        specialFeaturesParamsURLString +=
          "air_conditioning=" + airContioning + "&";
      }
      if (lift !== undefined) {
        specialFeaturesParamsURLString += "lift=" + lift + "&";
      }
      if (garden !== undefined) {
        specialFeaturesParamsURLString += "garden=" + garden + "&";
      }
      if (swimmingPool !== undefined) {
        specialFeaturesParamsURLString += "swimming_pool=" + swimmingPool + "&";
      }
      if (terrace !== undefined) {
        specialFeaturesParamsURLString += "terrace=" + terrace;
      }
      return specialFeaturesParamsURLString;
    }
  } else {
    specialFeaturesParamsURLString = currentParamsString;
    return specialFeaturesParamsURLString;
  }
}

function cityParamsURL(currentParamsString, city) {
  let cityParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    if (city === undefined) {
      return cityParamsURLString;
    } else {
      cityParamsURLString = "?city=" + city;
      return cityParamsURLString;
    }
  } else {
    cityParamsURLString = currentParamsString;
    if (city === undefined) {
      return cityParamsURLString;
    } else {
      cityParamsURLString += "&city=" + city;
      return cityParamsURLString;
    }
  }
}

function buildParamsURL() {
  let currentParamsString = "";
  //   currentParamsString = homeTypeParamsURL();
  currentParamsString = homeTypeParamsURL(
    "flatApartment",
    "house",
    "duplex",
    "penthouse"
  );
  console.log("currentParamsString-1", currentParamsString);
  // currentParamsString = conditionParamsURL(currentParamsString);
  currentParamsString = conditionParamsURL(
    currentParamsString,
    "newHouse",
    "good",
    "renovation"
  );
  console.log("currentParamsString-2", currentParamsString);
  //   currentParamsString = roomParamsURL(currentParamsString);
  currentParamsString = roomParamsURL(currentParamsString, "1");
  console.log("currentParamsString-3", currentParamsString);
  //   currentParamsString = bathParamsURL(currentParamsString);
  currentParamsString = bathParamsURL(currentParamsString, "2");
  console.log("currentParamsString-4", currentParamsString);
  currentParamsString = priceRangeParamsURL(currentParamsString, "5000");
  console.log("currentParamsString-5", currentParamsString);
  currentParamsString = publicationDateParamsURL(
    currentParamsString,
    "sep11,2021"
  );
  console.log("currentParamsString-6", currentParamsString);
  // currentParamsString = specialFeaturesParamsURL(currentParamsString);
  currentParamsString = specialFeaturesParamsURL(
    currentParamsString,
    "true",
    "true",
    "false",
    "true",
    "false",
    "false"
  );
  console.log("currentParamsString-7", currentParamsString);
  //   currentParamsString = cityParamsURL(currentParamsString);
  currentParamsString = cityParamsURL(currentParamsString, "badalona");
  console.log("currentParamsString-8", currentParamsString);

  return currentParamsString;
}

module.exports = {
  buildParamsURL: buildParamsURL,
};
