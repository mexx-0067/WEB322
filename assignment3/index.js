const db = require('./db');

async function main() {
  try {
    console.log('Starting database operations...\n');

    // Example 1: Create a sample table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Table "users" created or already exists');

    // Example 2: Insert data
    const insertResult = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      ['John Doe', 'john@example.com']
    );
    console.log('✅ User inserted:', insertResult.rows[0]);

    // Example 3: Query data
    const selectResult = await db.query('SELECT * FROM users');
    console.log('✅ All users:', selectResult.rows);

    // Example 4: Update data
    const updateResult = await db.query(
      'UPDATE users SET name = $1 WHERE email = $2 RETURNING *',
      ['Jane Doe', 'john@example.com']
    );
    console.log('✅ User updated:', updateResult.rows[0]);

    // Example 5: Delete data
    const deleteResult = await db.query(
      'DELETE FROM users WHERE email = $1 RETURNING *',
      ['john@example.com']
    );
    console.log('✅ User deleted:', deleteResult.rows[0]);

    console.log('\n✅ All operations completed successfully!');
    
    // Close the connection
    await db.pool.end();
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

main();