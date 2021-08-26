import { CSSProperties } from 'react';

export const centeredContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
};

export const fullScreen: CSSProperties = {
    width: '100%',
    height: '100%'
}

export const fullScreenAbsolute: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}