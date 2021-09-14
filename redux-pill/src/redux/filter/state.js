const INITIAL_STATE = {
  state: {
    type: {
      flatApartment: false,
      house: false,
      duplex: false,
      penthouse: false,
    },
    condition: {
      new: false,
      good: false,
      renovation: false,
    },
    room: 0,
    bath: 0,
    size: 0,
    priceRange: {
      minPrice: 50000,
      maxPrice: 800000,
    },
    specialFeatures: {
      pet: false,
      lift: false,
      garden: false,
      air_conditioning: false,
      swimming_pool: false,
      terrace: false,
    },
    city: "",
  },
  properties: [],
};

export default INITIAL_STATE;
