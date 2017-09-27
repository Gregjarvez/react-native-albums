const container = {
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 2,
  shadowOpacity: 0.2,
  elevation: 1,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  padding: 2
};

const cardSection = {
  position: 'relative',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  padding: 5,
  backgroundColor: '#fff',
  borderBottomWidth: 1,
  borderColor: '#ddd'
};

const textContainer = {
  flexDirection: 'column',
  justifyContent: 'space-around'
};

const thumbnail = {
  height: 50,
  width: 50
};

const thumbnailContainer = {
  justifyContent: 'center',
  alignContent: 'center',
  marginLeft: 10,
  marginRight: 10
};

const largeImage = {
  height: 300,
  flex: 1,
  width: null
};

export { container,
  cardSection,
  textContainer,
  thumbnail,
  thumbnailContainer,
  largeImage
};
