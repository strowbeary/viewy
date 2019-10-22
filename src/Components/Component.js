export function Component(componentDescriptor) {

    return () => componentDescriptor.template();
}
