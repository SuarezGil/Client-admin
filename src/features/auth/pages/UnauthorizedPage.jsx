export const UnauthorizedPage = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Acceso no autorizado</h2>
            <p className="text-lg text-gray-600">Solo los administradores pueden acceder a esta página.</p>
        </div>
    );
}