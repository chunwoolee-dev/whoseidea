import styled from 'styled-components';
const Container = styled.div`
  display: flex;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  padding: 50px;
  margin-left: 50px;
`;
const GifContainer = styled.div`
  img {
    width: 500px;
    height: 300px;
    padding: 50px;
  }
`;
export default function FeatureIdea() {
  return (
    <div>
      <Container>
        <GifContainer>
          <img src="아이디어 올리기.gif" />
        </GifContainer>
        <Text>
          <h1> 아이디어 쓰기 </h1>
          <h2>기발한 아이디어가 생각나셨나요?</h2>
          <h2>바로 아이디어를 작성해보세요!</h2>
          <h3> 여러분의 아이디어가 세상을 바꿉니다.</h3>
        </Text>
      </Container>
    </div>
  );
}
