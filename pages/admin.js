export default function Admin() {
    return null; // or any other UI component if needed
  }
  
  export async function getServerSideProps({ res }) {
    // Perform server-side redirect
    res.setHeader('Location', 'https://crooked-7kzx.onrender.com/admin/auth/login');
    res.statusCode = 302;
    res.end();
  
    return { props: {} };
  }
  