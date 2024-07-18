// import React, {Component} from 'react';
// import {connect, useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";
// import { withRouter } from 'react-router-dom';

// const ImagePage = () => {
//  const selectedImg = useSelector(state => state.cityViewReducer.selectedImg);
//
//  const navigate = useNavigate();
//
//   return (
//     <div>
//       <h2>Selected Image</h2>
//         <div>
//             <img src={selectedImg.regular} alt={selectedImg.des} />
//             <p>{selectedImg.des}</p>
//             <button onClick={()=>{
//                 navigate('/')
//             }}>Back</button>
//         </div>
//     </div>
//   );
// };
//
// export default ImagePage;

//Class component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const withNavigate = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
};

const mapStateToProps = (state) => ({
    selectedImg: state.cityViewReducer.selectedImg,
});

class ImagePage extends Component {
    render() {
        const { selectedImg, navigate } = this.props;

        return (
            <div>
                <h2>Selected Image</h2>
                <div>
                    <img src={selectedImg.regular} alt={selectedImg.des} />
                    <p>{selectedImg.des}</p>
                    <button onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withNavigate(ImagePage));


