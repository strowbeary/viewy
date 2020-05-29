let zIndex = 8000;

export const PopupManager = () => ({
    nextZIndex() {
        zIndex++;
        return zIndex;
    },
});
