<?php
if (isset($_GET['month1'])) {
    $month = strtoupper($_GET['month1']); // Convertir a mayúsculas para asegurar consistencia
    echo "Mes recibido: $month<br>"; // Verificar que el mes se reciba correctamente

    try {
        // Conexión a la base de datos SQLite
        $databasePath = __DIR__ . '/DB/AFIS.db';
        $pdo = new PDO("sqlite:" . $databasePath);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Validar que el mes sea válido
        $validMonths = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
        if (!in_array($month, $validMonths)) {
            die("Error: Mes no válido.");
        }

        // Preparar la consulta para obtener los datos de la tabla correspondiente al mes
        $query = "SELECT * FROM $month";
        echo "Ejecutando consulta en la tabla: $month<br>"; // Verificar la tabla consultada
        $stmt = $pdo->query($query);

        // Verificar si la consulta se ejecutó correctamente
        if ($stmt === false) {
            die("Error en la consulta: La tabla '$month' no existe o hay un problema en la consulta.");
        }

        // Verificar si se obtuvieron registros
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (empty($results)) {
            echo "No se encontraron registros para el mes $month.";
            exit;
        }

        // Mostrar los resultados en una tabla
        echo "<table border='1'>";
        echo "<tr><th>Día</th><th>AFI</th><th>Horas Totales</th><th>Horario</th><th>Lugar</th><th>Tipo</th></tr>";
        foreach ($results as $row) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($row['DIA']) . "</td>";
            echo "<td>" . htmlspecialchars($row['AFI']) . "</td>";
            echo "<td>" . htmlspecialchars($row['HRS_TOTALES']) . "</td>";
            echo "<td>" . htmlspecialchars($row['HORARIO']) . "</td>";
            echo "<td>" . htmlspecialchars($row['LUGAR']) . "</td>";
            echo "<td>" . htmlspecialchars($row['TIPO']) . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } catch (PDOException $e) {
        echo "Error en la conexión con la base de datos: " . $e->getMessage();
    }
} else {
    echo "No se recibió el parámetro 'month1'.";
}
?>