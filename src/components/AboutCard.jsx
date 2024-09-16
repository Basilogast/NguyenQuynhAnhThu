import React from 'react';

function AboutCard(props) {
    return (
        <div style={{
            ...styles.card,
            ...styles[props.size]
        }}>
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'gray'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default AboutCard;