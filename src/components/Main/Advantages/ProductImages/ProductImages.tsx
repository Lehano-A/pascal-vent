import React from 'react';
import CeilingSplitSystemImage from '../../../../images/components/Advantages/content/ceiling-split-system.png';
import AirFlowSchemeImage from '../../../../images/components/Advantages/content/air-flow-scheme.png';
import RoundTubeImage from '../../../../images/components/Advantages/content/round-tube.png';
import SquareTubeImage from '../../../../images/components/Advantages/content/square-tube.png';

function ProductImages() {
  return (
    <div className='advantages__product-images'>
      <div className='advantages__images-group advantages__images-group_gap_20'>
        <img
          src={CeilingSplitSystemImage}
          className='advantages__image'
          alt='Изображение потолочной сплит-системы'
        />
        <img
          src={AirFlowSchemeImage}
          className='advantages__image'
          alt='Изображение схемы потока воздуха по трубам'
        />
      </div>

      <div className='advantages__images-group advantages__images-group_gap_30'>
        <img
          src={RoundTubeImage}
          className='advantages__image'
          alt='Изображение круглой металлической трубы'
        />
        <img
          src={SquareTubeImage}
          className='advantages__image'
          alt='Изображение квадратной металлической трубы'
        />
      </div>
    </div>
  );
}

export default ProductImages;
