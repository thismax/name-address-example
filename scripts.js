const combineNamesAndAddresses = (namesList, addressesList) => {
  const namesAndAddresses = _.map(namesList, nameEntry => {
    let matchingAddress = _.find(addressesList, { id: nameEntry.id });
    return _.extend(nameEntry, matchingAddress);
  });
  console.log(namesAndAddresses);
};

combineNamesAndAddresses(namesList, addressesList);
