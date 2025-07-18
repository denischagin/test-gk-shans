import { AppRouter } from "./AppRouter"
import { ReduxProvider } from "./ReduxProvider"

export const RootProvider = () => {
    return (
        <ReduxProvider>
            <AppRouter />
        </ReduxProvider>
    )
}