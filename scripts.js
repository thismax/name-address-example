const combineNamesAndAddresses = (names, addresses) => {
  const namesAndAddresses = _.map(names, name => {
    let matchingAddress = _.find(addresses, { id: name.id });
    return _.extend(name, matchingAddress);
  });
  console.log(namesAndAddresses);
};

combineNamesAndAddresses(namesList, addressesList);
