const pages = new Map();

export function add_page(path, navigation_view) {
    pages.set(path, navigation_view);
}

export function mount() {
    return pages.get("/").render();
}
