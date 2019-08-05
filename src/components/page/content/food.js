import { Button, Card, Elevation } from '@blueprintjs/core';
import '../../../assets/scss/Food.scss';

const Food = props => {
  const foods = props.datas;
  return (
    <div className="box">
      {foods.map((food, index) => {
        return (
          <Card
            interactive={true}
            elevation={Elevation.TWO}
            className="one"
            key={index}
          >
            <img
              src={food.img_url}
              style={{
                maxWidth: '400px',
                maxHeight: '300px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              width="180"
              height="120"
            />
            <h5>
              <a href="#">{food.title}</a>
            </h5>
            <p>{food.desc}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Food;
