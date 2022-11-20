import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const ContainerShadow = styled.View`
  height: 24%;
  width: 100%;
  background: black;
  opacity: 0.78;
  padding: 8px;
  text-align: flex-start;
  justify-content: flex-end;
`;

export const ContainerCard = styled.ImageBackground`
  height: 230px;
  width: 140px;
  overflow: hidden;
  border-radius: 20px;
  justify-content: flex-end;
`;

export const CharactersRealName = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: white;
`;

export const CharacterName = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: white;
`;
