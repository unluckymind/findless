import React from 'react';
import 'assets/scss/App.scss';
import { Card, Elevation } from '@blueprintjs/core';
import '../../assets/scss/Food.scss';
import { Icon } from '@blueprintjs/core';
import cogoToast from 'cogo-toast';

function Menu() {
  cogoToast.loading('processing...').then(() => {
    cogoToast.warn('Upsss, under maintenance!');
  });
}

const Category = props => {
  const categories = props.datas;
  return (
    <div>
      <div className="w3-container w3-margin-top w3-animate-bottom">
        &nbsp;Category <Icon icon="chevron-right" />
      </div>
      <div className="box">
        {categories.map((category, index) => {
          return (
            <Card
              interactive={true}
              elevation={Elevation.TWO}
              className="one w3-animate-bottom"
              key={index}
              style={{ textAlign: 'center' }}
              onClick={() => Menu()}
            >
              <img
                src={category.img_url}
                width="25"
                height="25"
                style={{ marginBottom: '3px', padding: 0 }}
              />
              <p className="bp3-monospace-text bp3-text-large">
                {category.title}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
