import React from "react";
import Actor from "../Actor/Actor";
import { connect } from "react-redux";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow
} from "mdbreact";

const MultiCarouselPage = props => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              {props.characters.map(actor => (
                <div className="col-2">
                  <Actor actor={actor} />
                </div>
              ))}
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};
export default connect(mapStateToProps)(MultiCarouselPage);
