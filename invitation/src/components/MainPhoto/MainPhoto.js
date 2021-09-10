import React from 'react';
import './MainPhoto.css'


const MainPhoto = (props) => (
        <div className="Main">
            <img className="Photo" src='https://mk0paperlessmovn94k7.kinstacdn.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg' alt="альтернативный текст"/>
            <div className="PhotoDivBig">
                    <img className="Leaf" id="First" src='https://thumb.tildacdn.com/tild3935-3733-4365-a138-636463656438/-/resize/413x/-/format/webp/_103x.png' alt="альтернативный текст"/>
                    <img className="Leaf" id="Second" src='https://thumb.tildacdn.com/tild3133-6336-4262-a563-393631616530/-/resize/716x/-/format/webp/_113x.png' alt="альтернативный текст"/>
                <div className="PhotoDivSmall">
                    <h1>Gulnaz</h1>
                    <span></span>
                </div>
            </div>
        </div>
)


export default MainPhoto;