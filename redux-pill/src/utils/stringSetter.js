function homeTypeParamsURL(types) {
  let typeURLString = "";
  let typeURLArray = [];

  for (const [key, value] of Object.entries(types)) {
    if (value === true) {
      typeURLArray.push(key);
    }
  }

  if (typeURLArray.length === 0) {
    // console.log("typeURLString", typeURLString);
    return typeURLString;
  } else {
    for (let j = 0; j < typeURLArray.length; j++) {
      if (j === 0) {
        if (typeURLArray[j] === "flatApartment") {
          typeURLString += "?type=flat/apartment";
        } else {
          typeURLString += "?type=" + typeURLArray[j];
        }
      } else {
        if (typeURLArray[j] === "flatApartment") {
          typeURLString += "&type=flat/apartment";
        } else {
          typeURLString += "&type=" + typeURLArray[j];
        }
      }
    }
    // console.log("typeURLString", typeURLString);
    return typeURLString;
  }
}

function conditionParamsURL(currentParamsString, conditions) {
  let conditionURLString = "";
  let conditionURLArray = [];

  for (const [key, value] of Object.entries(conditions)) {
    if (value === true) {
      conditionURLArray.push(key);
    }
  }

  if (currentParamsString === "" || currentParamsString === undefined) {
    // conditionURLString = "";
    if (conditionURLArray.length === 0) {
      return conditionURLString;
    } else {
      for (let j = 0; j < conditionURLArray.length; j++) {
        if (j === 0) {
          conditionURLString += "?condition=" + conditionURLArray[j];
        } else {
          conditionURLString += "&condition=" + conditionURLArray[j];
        }
      }
      // console.log("conditionURLString", conditionURLString);
      return conditionURLString;
    }
  } else {
    conditionURLString = currentParamsString;
    if (conditionURLArray.length === 0) {
      return conditionURLString;
    } else {
      for (let j = 0; j < conditionURLArray.length; j++) {
        conditionURLString += "&condition=" + conditionURLArray[j];
      }
      return conditionURLString;
    }
    // console.log("conditionURLString", conditionURLString);
  }
}

function roomParamsURL(currentParamsString, rooms) {
  let roomParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    if (rooms === 0) {
      return roomParamsURLString;
    } else {
      roomParamsURLString = "?room=" + rooms;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return roomParamsURLString;
    }
  } else {
    roomParamsURLString = currentParamsString;

    if (rooms === 0) {
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
    if (baths === 0) {
      return bathParamsURLString;
    } else {
      bathParamsURLString = "?bath=" + baths;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return bathParamsURLString;
    }
  } else {
    bathParamsURLString = currentParamsString;

    if (baths === 0) {
      return bathParamsURLString;
    } else {
      bathParamsURLString += "&bath=" + baths;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return bathParamsURLString;
    }
  }
}

function sizeParamsURL(currentParamsString, size) {
  let sizeParamsURLString = "";
  if (currentParamsString === "" || currentParamsString === undefined) {
    if (size === 0) {
      return sizeParamsURLString;
    } else {
      sizeParamsURLString = "?size=" + size;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return sizeParamsURLString;
    }
  } else {
    sizeParamsURLString = currentParamsString;

    if (size === 0) {
      return sizeParamsURLString;
    } else {
      sizeParamsURLString += "&size=" + size;
      //   console.log("roomParamsURLString", roomParamsURLString);
      return sizeParamsURLString;
    }
  }
}

function priceRangeParamsURL(currentParamsString, priceRange) {
  let priceRangeParamsURLString = "";

  if (currentParamsString === "" || currentParamsString === undefined) {
    priceRangeParamsURLString =
      "?price_gte=" + priceRange.minPrice + "&price_lte=" + priceRange.maxPrice;
    return priceRangeParamsURLString;
  } else {
    priceRangeParamsURLString = currentParamsString;
    priceRangeParamsURLString +=
      "&price_gte=" + priceRange.minPrice + "&price_lte=" + priceRange.maxPrice;
    return priceRangeParamsURLString;
  }
}

// function publicationDateParamsURL(currentParamsString, publicationDate) {
//   let publicationDateParamsURLString = "";
//   if (currentParamsString === "" || currentParamsString === undefined) {
//     if (publicationDate === undefined) {
//       return publicationDateParamsURLString;
//     } else {
//       publicationDateParamsURLString = "?publication_date=" + publicationDate;
//       return publicationDateParamsURLString;
//     }
//   } else {
//     publicationDateParamsURLString = currentParamsString;
//     if (publicationDate === undefined) {
//       return publicationDateParamsURLString;
//     } else {
//       publicationDateParamsURLString += "&publication_date=" + publicationDate;
//       return publicationDateParamsURLString;
//     }
//   }
// }

function specialFeaturesParamsURL(currentParamsString, specialFeatures) {
  let specialFeaturesParamsURLString = "";
  let specialFeaturesURLArray = [];

  for (const [key, value] of Object.entries(specialFeatures)) {
    if (value === true) {
      specialFeaturesURLArray.push([key, value]);
    }
  }

  if (specialFeaturesURLArray.length > 0) {
    if (currentParamsString === "" || currentParamsString === undefined) {
      specialFeaturesParamsURLString = "?";
      for (let i = 0; i < specialFeaturesURLArray.length; i++) {
        if (i === specialFeaturesURLArray.length - 1) {
          specialFeaturesParamsURLString +=
            specialFeaturesURLArray[i][0] + "=true";
        } else {
          specialFeaturesParamsURLString +=
            specialFeaturesURLArray[i][0] + "=true&";
        }
      }
      return specialFeaturesParamsURLString;
    } else {
      specialFeaturesParamsURLString = currentParamsString + "&";
      for (let i = 0; i < specialFeaturesURLArray.length; i++) {
        if (i === specialFeaturesURLArray.length - 1) {
          specialFeaturesParamsURLString +=
            specialFeaturesURLArray[i][0] + "=true";
        } else {
          specialFeaturesParamsURLString +=
            specialFeaturesURLArray[i][0] + "=true&";
        }
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
    if (city === "") {
      return cityParamsURLString;
    } else {
      cityParamsURLString = "?city=" + city;
      return cityParamsURLString;
    }
  } else {
    cityParamsURLString = currentParamsString;
    if (city === "") {
      return cityParamsURLString;
    } else {
      cityParamsURLString += "&city=" + city;
      return cityParamsURLString;
    }
  }
}

function buildParamsURL(filters) {
  let currentParamsString = "";

  currentParamsString = homeTypeParamsURL(filters.type);
  currentParamsString = conditionParamsURL(
    currentParamsString,
    filters.condition
  );
  currentParamsString = roomParamsURL(currentParamsString, filters.room);
  currentParamsString = bathParamsURL(currentParamsString, filters.bath);
  currentParamsString = sizeParamsURL(currentParamsString, filters.size);
  currentParamsString = priceRangeParamsURL(
    currentParamsString,
    filters.priceRange
  );
  currentParamsString = specialFeaturesParamsURL(
    currentParamsString,
    filters.specialFeatures
  );
  currentParamsString = cityParamsURL(currentParamsString, filters.city);

  return currentParamsString;
}

module.exports = {
  buildParamsURL: buildParamsURL,
};
