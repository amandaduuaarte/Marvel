import styled from 'styled-components/native';

export const ContainerShadow = styled.ScrollView`
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.75;
`;

export const ContainerImg = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const ContainerTexts = styled.View`
  margin-top: 64%;
  height: 100%;
  width: 100%;
  padding: 0 24px;
`;

export const AlterEgoText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: white;
`;

export const SkillsText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: white;
  margin-right: 12px;
`;

export const NameText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 40px;
  color: white;
`;

export const ContainerCaracters = styled.View`
  height: 48px;
  width: 100%;
  margin: 24px 4px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CaracterCard = styled.View`
  width: 20%;
  height: 48px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SkillsCard = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Biography = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: white;
  text-align: justify;
  margin-bottom: 32px;
`;

export const TopicText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  color: white;
  margin-bottom: 16px;
`;
