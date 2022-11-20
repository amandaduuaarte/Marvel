import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const ContainerCard = styled.ImageBackground`
  height: 230px;
  width: 140px;
  text-align: flex-start;
  justify-content: flex-end;
  padding: 8px;
  overflow: hidden;
  border-radius: 20px;
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
