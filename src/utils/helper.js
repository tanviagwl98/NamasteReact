export function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    console.log("filtered", data);
  
    return data;
  }