import React from 'react'

const Cardss = () => {
  return (

    <Box component="main" sx={{ p: 3, marginLeft: { sm: `${drawerWidth}px` }, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <Toolbar />
    <TextField
      id="outlined-basic"
      label="search"
      variant="outlined"
      sx={{ marginBottom: "40px", marginRight: "auto", marginLeft: "auto", justifyContent: "center", width: '440px' }}
      onChange={(e) => setSearch(e.target.value)}
    />
{error && <Typography color="error">{error}</Typography>}
    <Grid container spacing={2} justifyContent="center">
      {currentOffers.length > 0 ? (
        currentOffers.map((offer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Cart offer={offer} /> {/* Use the updated Cart component */}
          </Grid>
        ))
      ) : (
        <Typography variant="h6">No offers found.</Typography>
      )}
    </Grid>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button variant="outlined" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <Typography variant="body1" sx={{ mx: 2 }}>{currentPage} of {totalPages}</Typography>
      <Button variant="outlined" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Box>
  </Box>   )
}

export default Cardss