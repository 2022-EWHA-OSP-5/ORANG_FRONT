import { R } from './Detail.style';
import starimg from '../../assets/Detail/Star.svg';
import orange1 from '../../assets/Detail/Orange1.svg';
import orange2 from '../../assets/Detail/Orange2.svg';
import orange3 from '../../assets/Detail/Orange3.svg';
import orange4 from '../../assets/Detail/Orange4.svg';

const Review = props => {
  const { author, date, star, img, content } = props;
  const ProfileImg = [orange1, orange2, orange3, orange4];
  const rand = Math.floor(Math.random() * 4);
  let originAuthor = author;
  let maskedAuthor;
  if (originAuthor === '') {
    maskedAuthor = originAuthor;
  } else {
    if (originAuthor.length < 3) {
      maskedAuthor = originAuthor.replace(/(?<=.{1})./gi, '*');
    } else {
      maskedAuthor = originAuthor.replace(/(?<=.{3})./gi, '*');
    }
  }
  return (
    <R.Container>
      <R.Header>
        <R.ProfileCircle>
          <div>
            <R.Profile src={ProfileImg[rand]} />
          </div>
        </R.ProfileCircle>
        <div>
          <R.Author>{maskedAuthor}</R.Author>
          <div style={{ display: 'flex' }}>
            <R.StarImg src={starimg} />
            <R.Star>{star.toFixed(1)}</R.Star>
          </div>
          <R.Date>{date}</R.Date>
        </div>
      </R.Header>
      <R.ImgRect>
        <R.Img src={img} />
      </R.ImgRect>
      <R.Content>
        {content &&
          (content.includes('\n') ? (
            <>
              {content.split('\n').map(line => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </>
          ) : (
            <>
              <span>{content}</span>
            </>
          ))}
      </R.Content>
    </R.Container>
  );
};

export default Review;
